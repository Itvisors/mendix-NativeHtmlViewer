import { createElement, ReactElement } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { CustomStyle } from "../NativeHtmlViewer";

export interface NativeHtmlRendererProps {
    content?: string;
    styles: CustomStyle;
}

export const NativeHtmlRenderer = (props: NativeHtmlRendererProps): ReactElement => {
    const { width } = useWindowDimensions();
    const source = {
        html: props.content ? props.content : ""
    };
    return <RenderHtml contentWidth={width} source={source} tagsStyles={{ body: { color: "#E7E7E9" } }} />;
};
