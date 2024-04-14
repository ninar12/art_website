import { useEffect, useState } from "react"

const Loading = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 10000) // 2000ms = 2 seconds

    return () => clearTimeout(timer) // Clean up on component unmount
  }, [])
  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "red",
        fontSize: "x-large",
      }}>
      <p>Loading...</p>
    </div>
  ) : null
}

export default Loading
