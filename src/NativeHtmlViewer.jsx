import { NativeHtmlRenderer } from "./components/NativeHtmlRenderer";

export const NativeHtmlViewer = props => {
    let enableCSSInlineProcessingValue = true;
    const { enableCSSInlineProcessing } = props;
    if (enableCSSInlineProcessing?.status === "available") {
        enableCSSInlineProcessingValue = !!enableCSSInlineProcessing.value;
    }
    return (
        <NativeHtmlRenderer
            style={props.style}
            content={props.content?.value}
            ignoredStyles={props.ignoredStyles?.value}
            enableCSSInlineProcessing={enableCSSInlineProcessingValue}
        ></NativeHtmlRenderer>
    );
};
