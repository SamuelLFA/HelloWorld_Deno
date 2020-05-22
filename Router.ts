import { Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";

export default class MyRouter {
    router: Router;
    backend: Array<String>;

    constructor() {
        this.router = new Router();

        this.backend = [
            "Java",
            "JavaScript",
            "TypeScript",
            "C#"
        ];
    }

    build(): Router {
        this.router.get("/", async(ctx) => { 
            return "Hello World";
        });

        this.router.get("/backend", async(ctx) => { 
            return this.backend;
        });

        return this.router;
    }
}