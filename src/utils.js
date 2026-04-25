import { fontFamilyList } from "./constant";

export function getLayoutSettings(settings) {
  const layoutSettings = {};
  settings.map((item) => {
    if (item.groupId === "dividers") {
      return (layoutSettings[item.groupId] = item["selects"]);
    }
    if (item.groupId === "logos") {
      return (layoutSettings[item.groupId] = item["images"]);
    }
    return (layoutSettings[item.groupId] = item[item.groupId]);
  });
  return layoutSettings;
}

export function getLayoutStyles(layoutSettings) {
  const lFontFamily = layoutSettings.texts.TicketDetailsTitles.fontFamily;
  const labelFontFamily =
    lFontFamily.split(" ").length > 1 ? `"${lFontFamily}"` : lFontFamily;

  const dFontFamily = layoutSettings.texts.TicketDetails.fontFamily;
  const detailsFontFamily =
    dFontFamily.split(" ").length > 1 ? `"${dFontFamily}"` : dFontFamily;

  const tFontFamily = layoutSettings.texts.EventTitle.fontFamily;
  const titleFontFamily =
    tFontFamily.split(" ").length > 1 ? `"${tFontFamily}"` : tFontFamily;

  const backgroundStyle = layoutSettings.backgrounds.documentColor.image.id
    ? {
        backgroundSize: "cover",
        backgroundImage: `url('${layoutSettings.backgrounds.documentColor.image.url}')`,
      }
    : undefined;
  const labelStyle = {
    fontFamily: `"${labelFontFamily}", ${fontFamilyList}`,
    fontSize: `${layoutSettings.texts.TicketDetailsTitles.fontSize}px`,
    textAlign: layoutSettings.texts.TicketDetailsTitles.textAlign,
    color: layoutSettings.texts.TicketDetailsTitles.textColor,
    width: "100%",
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontWeight: layoutSettings.texts.TicketDetailsTitles.fontStyle.includes(
      "fontBold",
    )
      ? "bold"
      : undefined,
    textDecoration: layoutSettings.texts.TicketDetailsTitles.fontStyle.includes(
      "fontUnderline",
    )
      ? "underline"
      : undefined,
    fontStyle: layoutSettings.texts.TicketDetailsTitles.fontStyle.includes(
      "fontItalic",
    )
      ? "italic"
      : undefined,
  };
  const detailsStyle = {
    fontFamily: `${detailsFontFamily}, ${fontFamilyList}`,
    fontSize: `${layoutSettings.texts.TicketDetails.fontSize}px`,
    textAlign: "start",
    color: layoutSettings.texts.TicketDetails.textColor,
    width: "100%",
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontWeight: layoutSettings.texts.TicketDetails.fontStyle.includes(
      "fontBold",
    )
      ? "bold"
      : undefined,
    textDecoration: layoutSettings.texts.TicketDetails.fontStyle.includes(
      "fontUnderline",
    )
      ? "underline"
      : undefined,
    fontStyle: layoutSettings.texts.TicketDetails.fontStyle.includes(
      "fontItalic",
    )
      ? "italic"
      : undefined,
  };
  const titleStyle = {
    fontFamily: `${titleFontFamily}, ${fontFamilyList}`,
    fontSize: `${layoutSettings.texts.EventTitle.fontSize}px`,
    textAlign: layoutSettings.texts.EventTitle.textAlignment,
    color: layoutSettings.texts.EventTitle.textColor,
    width: "100%",
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    wordBreak: "break-word",
    fontWeight: layoutSettings.texts.EventTitle.fontStyle.includes("fontBold")
      ? "bold"
      : undefined,
    textDecoration: layoutSettings.texts.EventTitle.fontStyle.includes(
      "fontUnderline",
    )
      ? "underline"
      : undefined,
    fontStyle: layoutSettings.texts.EventTitle.fontStyle.includes("fontItalic")
      ? "italic"
      : undefined,
  };

  const pFontFamily = layoutSettings.texts.TicketPolicy.fontFamily;
  const policyFontFamily =
    pFontFamily.split(" ").length > 1 ? `"${pFontFamily}"` : pFontFamily;

  const policyStyle = {
    fontFamily: `${policyFontFamily}, ${fontFamilyList}`,
    fontSize: `${layoutSettings.texts.TicketPolicy.fontSize}px`,
    textAlign: layoutSettings.texts.TicketPolicy.textAlignment,
    color: layoutSettings.texts.TicketPolicy.textColor,
    width: "100%",
    display: "block",
    textOverflow: "elipsis",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
    fontWeight: layoutSettings.texts.TicketPolicy.fontStyle.includes("fontBold")
      ? "bold"
      : undefined,
    textDecoration: layoutSettings.texts.TicketPolicy.fontStyle.includes(
      "fontUnderline",
    )
      ? "underline"
      : undefined,
    fontStyle: layoutSettings.texts.TicketPolicy.fontStyle.includes(
      "fontItalic",
    )
      ? "italic"
      : undefined,
  };
  ("font-family: ${policyFontFamily},${fontFamilyList}; font-size: ${policyFontSize}px; text-align: ${policyTextAlignment}; color: ${policyFontColor}; width: 100%; display: block; text-overflow: ellipsis; overflow: hidden; white-space: pre-wrap;${policyFontStyle}");

  const dividerStyle = {
    borderColor: layoutSettings.dividers.mainDivider.primaryColor,
    "--papyrus-border-width": `${layoutSettings.dividers.mainDivider.size}pt`,
    "--papyrus-border-style": layoutSettings.dividers.mainDivider.value,
  };
  return {
    labelFontFamily,
    detailsFontFamily,
    titleFontFamily,
    backgroundStyle,
    labelStyle,
    detailsStyle,
    titleStyle,
    dividerStyle,
    policyStyle,
  };
}