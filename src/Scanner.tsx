import QrScanner from "qr-scanner"
import { useEffect, useRef, useState } from "react"

const Scanner = () => {
  const videoRef = useRef(null)
  const [qrCodeData, setQrCodeData] = useState("")

  useEffect(() => {
    let qrScanner: QrScanner

    const handleScan = (result: QrScanner.ScanResult) => {
      setQrCodeData((prev) => (result.data !== prev ? result.data : prev))
    }

    if (videoRef.current) {
      qrScanner = new QrScanner(videoRef.current, handleScan, {
        highlightScanRegion: true,
        highlightCodeOutline: true,
      })

      qrScanner.start().catch((error) => {
        console.error("QR Scanner failed to start:", error)
      })
    }

    return () => {
      if (qrScanner) {
        qrScanner.stop()
      }
    }
  }, [])

  useEffect(() => {
    console.log("QR Code detected:", qrCodeData)
  }, [qrCodeData])

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }}></video>
      {qrCodeData && (
        <div>
          <p>Scanned QR Code Data: {qrCodeData}</p>
        </div>
      )}
    </div>
  )
}

export default Scanner
