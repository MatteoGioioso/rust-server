## Rust server that runs inside a Docker container

Updated to [Devblog 101](https://playrust.com/devblog-101/)

# How to run the server
1. Set the ```RUST_SERVER_STARTUP_ARGUMENTS``` environment variable to match your preferred server arguments (defaults are set to ```"-batchmode -load -logfile /dev/stdout"```, note how we're logging to stdout)
2. Optionally mount ```/steamcmd/rust/server``` (or any other Rust servers you might need) somewhere on the host or inside another container to keep your data safe
3. Run the container and enjoy!

The following environment variables are available and should be used individually instead of specifying them in the arguments variable:
```
RUST_SERVER_STARTUP_ARGUMENTS
RUST_SERVER_NAME
RUST_SERVER_DESCRIPTION
RUST_SERVER_URL
RUST_SERVER_BANNER_URL
```
