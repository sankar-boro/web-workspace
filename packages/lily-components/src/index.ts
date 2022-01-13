import { Ok, Result } from "ts-results";

export const Hello = () => {
    return "Hello World@"
}

export const SomeData = (): Result<string, string> => {
    return Ok("Sankar");
}