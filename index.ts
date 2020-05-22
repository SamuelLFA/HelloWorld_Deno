import { Application } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";

import Router from "./router.ts";

const app = new Application();

app.use(new Router().build());

await app.run();