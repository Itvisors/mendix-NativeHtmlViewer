import { Component, createElement } from "react";
import { NativeHtmlRenderer } from "./components/NativeHtmlRenderer";

export class NativeHtmlViewer extends Component {
    render() {
        return <NativeHtmlRenderer content={this.props.content?.value} style={this.props.style}></NativeHtmlRenderer>;
    }
}
