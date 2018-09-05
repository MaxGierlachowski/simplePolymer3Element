import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { CustomElement } from "../custom-element.ts";

@CustomElement({
    template: "./simple-element/template.html",
    style: "./simple-element/style.scss",
    tag: "simple-element"
})
export class SimpleElement extends PolymerElement {

    static get properties(): object {
        return {
            name: {
                type: String,
                value: 'simple-element'
            }
        };
    }

}
