import { Component, ReactNode, createElement } from "react";
import { TextStyle } from "react-native";

import { mergeNativeStyles, Style } from "@mendix/pluggable-widgets-tools";

import { NativeHtmlViewerProps } from "../typings/NativeHtmlViewerProps";
import { NativeHtmlRenderer } from "./components/NativeHtmlRenderer";

export interface CustomStyle extends Style {
    body: TextStyle;
}

const defaultStyle: CustomStyle = {
    body: {
        color: "#E7E7E9" // Default text color
    }
};

export class NativeHtmlViewer extends Component<NativeHtmlViewerProps<CustomStyle>> {
    render(): ReactNode {
        const styles = mergeNativeStyles(defaultStyle, this.props.style);
        return <NativeHtmlRenderer content={this.props.content?.value} styles={styles}></NativeHtmlRenderer>;
    }
}
