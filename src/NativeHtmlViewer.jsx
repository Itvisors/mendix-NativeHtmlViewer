import { Component, createElement } from "react";
import { NativeHtmlRenderer } from "./components/NativeHtmlRenderer";

export class NativeHtmlViewer extends Component {
    render() {
        let enableCSSInlineProcessingValue = true;
        const { enableCSSInlineProcessing } = this.props;
        if (enableCSSInlineProcessing?.status === "available") {
            enableCSSInlineProcessingValue = !!enableCSSInlineProcessing.value;
        }
        return (
            <NativeHtmlRenderer
                style={this.props.style}
                content={this.props.content?.value}
                ignoredStyles={this.props.ignoredStyles?.value}
                enableCSSInlineProcessing={enableCSSInlineProcessingValue}
            ></NativeHtmlRenderer>
        );
    }
}
