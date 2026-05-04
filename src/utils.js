import { fontFamilyList, maxRes, maxResLogo } from "./constant";

export function getEventImageUrl(imageData, selectedTicketTemplate) {
  if (imageData.resize === "FIT") {
    if (imageData.image.height > maxRes[selectedTicketTemplate].h || imageData.image.width > maxRes[selectedTicketTemplate].w) {
      const ratio = Math.min(maxRes[selectedTicketTemplate].w / imageData.image.width, maxRes[selectedTicketTemplate].h / imageData.image.height);
      imageData.image.height = Math.round(imageData.image.height * ratio);
      imageData.image.width = Math.round(imageData.image.width * ratio);
    }
  } else {
    if (imageData.image.height > maxRes[selectedTicketTemplate].h || imageData.image.width > maxRes[selectedTicketTemplate].w) {
      imageData.image.height = maxRes[selectedTicketTemplate].h;
      imageData.image.width = maxRes[selectedTicketTemplate].w;
    }
  }
  return `https://static.wixstatic.com/media/${imageData.image.id}/v1/fill/w_${imageData.image.width},h_${imageData.image.height},al_c,q_90,usm_0.66_1.00_0.01,enc_auto/${imageData.image.id}`;
}

export function getLogoUrl(imageData, selectedTicketTemplate) {
  if (imageData.height > maxResLogo[selectedTicketTemplate].h || imageData.width > maxResLogo[selectedTicketTemplate].w) {
    const ratio = Math.min(maxResLogo[selectedTicketTemplate].w / imageData.width, maxResLogo[selectedTicketTemplate].h / imageData.height);
    imageData.height = Math.round(imageData.height * ratio);
    imageData.width = Math.round(imageData.width * ratio);
  }
  return `https://static.wixstatic.com/media/${imageData.id}/v1/fill/w_${imageData.width},h_${imageData.height},al_c,q_90,usm_0.66_1.00_0.01,enc_auto/${imageData.id}`;
}

export function getBackroundUrl(imageData, selectedTicketTemplate) {
  let maxResBG = {
    w: 743,
    h: 1051
  }

  if (selectedTicketTemplate === "professional") {
    maxResBG = {
      w: 1469,
      h: 678
    }
  }
  if (imageData.height < maxResBG.h || imageData.width < maxResBG.w) {
    const ratio = Math.min(maxResBG.w / imageData.width, maxResBG.h / imageData.height);
    imageData.height = Math.round(imageData.height * ratio);
    imageData.width = Math.round(imageData.width * ratio);
  } else {
    imageData.height = maxResBG.h;
    imageData.width = maxResBG.w;
  }
  
  return `https://static.wixstatic.com/media/${imageData.id}/v1/fill/w_${imageData.width},h_${imageData.height},al_c,q_90,usm_0.66_1.00_0.01,enc_auto/${imageData.id}`;
}

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

export function getLayoutStyles(layoutSettings, selectedTicketTemplate) {
  const lFontFamily = layoutSettings.texts.TicketDetailsTitles.fontFamily;
  const labelFontFamily =
    lFontFamily.split(" ").length > 1 ? `"${lFontFamily}"` : lFontFamily;

  const dFontFamily = layoutSettings.texts.TicketDetails.fontFamily;
  const detailsFontFamily =
    dFontFamily.split(" ").length > 1 ? `"${dFontFamily}"` : dFontFamily;

  const tFontFamily = layoutSettings.texts.EventTitle.fontFamily;
  const titleFontFamily =
    tFontFamily.split(" ").length > 1 ? `"${tFontFamily}"` : tFontFamily;

  let textAlign = layoutSettings.texts.TicketDetailsTitles.textAlign;
  if (textAlign === "left") {
    textAlign = "start";
  }
  if (textAlign === "right") {
    textAlign = "end";
  }

  const backgroundStyle = layoutSettings.backgrounds.documentColor.image.id
    ? {
      backgroundSize: "cover",
      backgroundImage: `url('${getBackroundUrl(layoutSettings.backgrounds.documentColor.image, selectedTicketTemplate)}')`,
    }
    : undefined;
  const labelStyle = {
    fontFamily: `"${labelFontFamily}", ${fontFamilyList}`,
    fontSize: `${layoutSettings.texts.TicketDetailsTitles.fontSize}px`,
    textAlign: textAlign,
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
    textAlign: textAlign,
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
    textAlign: textAlign,
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
    textAlign
  };
}