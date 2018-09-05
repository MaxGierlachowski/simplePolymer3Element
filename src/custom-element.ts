export const CustomElement = (options: any) => {
    return (target: any) => {

        /* webpackChunkName: "./[request]" can be used to seperate files */

        import(/* webpackMode: "eager" */ `${options.template}`).then(htmlData => {

            import(/* webpackMode: "eager" */ `${options.style}`).then(styleData => {

                let templateDocument = document.createElement("template");
                templateDocument.innerHTML = "<style>" + styleData.default + "</style>" + htmlData.default;
                Object.defineProperty(target, "template", {
                    get: () => {
                        return templateDocument;
                    }
                });

                window.customElements.define(options.tag, target);
                Object.defineProperty(target, "tag", {
                    value: options.tag
                })

            });

        });

    }
};
