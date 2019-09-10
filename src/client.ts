import * as sapper from "@sapper/app"
import "./constants.scss"
import "regenerator-runtime/runtime"

// load default brush
import "./constants/brushes"

try {
  sapper.start({
    target: document.querySelector("#sapper")!
  })
} catch {}
