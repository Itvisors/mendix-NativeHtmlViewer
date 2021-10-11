import { Component, createElement } from "react";
import { NativeHtmlRenderer } from "./components/NativeHtmlRenderer";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    body: {
        color: "#E7E7E9" // Default text color
    }
};
export class NativeHtmlViewer extends Component {
    render() {
        const styles = mergeNativeStyles(defaultStyle, this.props.style);
        return <NativeHtmlRenderer content={this.props.content?.value} styles={styles}></NativeHtmlRenderer>;
    }
}
