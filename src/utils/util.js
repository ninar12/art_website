import * as THREE from "three"
import { extend } from "@react-three/fiber"

// Paul West @prisoner849 https://discourse.threejs.org/u/prisoner849
// https://discourse.threejs.org/t/simple-curved-plane/26647/10
// This class extends the THREE.PlaneGeometry class to create a bent plane geometry.
class BentPlaneGeometry extends THREE.PlaneGeometry {
  // The constructor takes a radius and any other arguments for the PlaneGeometry constructor.

  constructor(radius, ...args) {
    // Call the PlaneGeometry constructor with the provided arguments.
    super(...args)
    // Get the parameters of the plane.
    let p = this.parameters
    // Calculate half the width of the plane.
    let hw = p.width * 0.5
    // Create vectors for three points: the left edge of the plane (a), the center of the circle the plane is bent around (b), and the right edge of the plane (c).
    let a = new THREE.Vector2(-hw, 0)
    let b = new THREE.Vector2(0, radius)
    let c = new THREE.Vector2(hw, 0)
    // Calculate vectors for the sides of the triangle formed by a, b, and c.
    let ab = new THREE.Vector2().subVectors(a, b)
    let bc = new THREE.Vector2().subVectors(b, c)
    let ac = new THREE.Vector2().subVectors(a, c)
    // Calculate the radius of the circle that circumscribes the triangle.
    let r =
      (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)))
    // Calculate the center of the circle.

    let center = new THREE.Vector2(0, radius - r)
    // Calculate the base vector and angle.
    let baseV = new THREE.Vector2().subVectors(a, center)
    let baseAngle = baseV.angle() - Math.PI * 0.5
    // Calculate the arc of the circle.
    let arc = baseAngle * 2
    // Get the uv and position attributes of the plane.

    let uv = this.attributes.uv
    let pos = this.attributes.position
    // Create a vector for the main vertex.
    let mainV = new THREE.Vector2()
    // For each vertex in the plane...
    for (let i = 0; i < uv.count; i++) {
      // Calculate the uv ratio.

      let uvRatio = 1 - uv.getX(i)
      // Get the y position of the vertex.

      let y = pos.getY(i)
      // Calculate the new position of the vertex.

      mainV.copy(c).rotateAround(center, arc * uvRatio)
      // Set the new position of the vertex.

      pos.setXYZ(i, mainV.x, y, -mainV.y)
    }
    pos.needsUpdate = true
  }
}

class MeshSineMaterial extends THREE.MeshBasicMaterial {
  constructor(parameters = {}) {
    super(parameters)
    this.setValues(parameters)
    this.time = { value: 0 }
  }
  onBeforeCompile(shader) {
    shader.uniforms.time = this.time
    shader.vertexShader = `
      uniform float time;
      ${shader.vertexShader}
    `
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * PI * 4.0) / 4.0, position.z);`
    )
  }
}

extend({ MeshSineMaterial, BentPlaneGeometry })
