import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { NativeHtmlViewerProps } from "../typings/NativeHtmlViewerProps";
import { NativeHtmlRenderer } from "./components/NativeHtmlRenderer";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class NativeHtmlViewer extends Component<NativeHtmlViewerProps<CustomStyle>> {
    render(): ReactNode {
        return <NativeHtmlRenderer content={this.props.content?.value}></NativeHtmlRenderer>;
    }
}
