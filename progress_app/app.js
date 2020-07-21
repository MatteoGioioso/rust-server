console.log(JSON.stringify({
  logType: "STATUS_REPORT",
  containerId: process.env.RUST_SERVER_IDENTITY,
  progress: process.env.PROCESS_PERCENTAGE,
  step: process.env.PROCESS_STEP
}))
