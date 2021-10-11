import RenderHtml from "react-native-render-html";
import { createElement } from "react";
import { useWindowDimensions } from "react-native";

export const NativeHtmlRenderer = props => {
    const { width } = useWindowDimensions();
    const source = {
        html: props.content ? props.content : ""
    };
    return <RenderHtml contentWidth={width} source={source} tagsStyles={props.styles} />;
};
