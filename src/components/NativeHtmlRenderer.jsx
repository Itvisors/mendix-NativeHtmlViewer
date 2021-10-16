import { Appearance, useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { createElement } from "react";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

export const NativeHtmlRenderer = props => {
    const { width } = useWindowDimensions();
    const source = {
        html: props.content ? props.content : ""
    };
    const darkMode = Appearance.getColorScheme() === "dark";
    const defaultStyle = {
        body: {
            color: darkMode ? "#FFF" : "#0A1325" // Default text color
        }
    };
    const styles = mergeNativeStyles(defaultStyle, props.style);
    let ignoredStyles;
    if (props.ignoredStyles) {
        ignoredStyles = props.ignoredStyles.split(",");
    }
    return (
        <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={styles}
            ignoredStyles={ignoredStyles}
            enableCSSInlineProcessing={props.enableCSSInlineProcessing}
        />
    );
};
