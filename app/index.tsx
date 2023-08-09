import { useEffect } from "react";

export default function Homepage() {
    useEffect(() => {
        window.location.replace(window.location.toString() + "stacks/");
    }, []);
}