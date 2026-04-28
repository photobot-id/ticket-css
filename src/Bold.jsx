import { Label } from "./constant";
import { getEventImageUrl, getLayoutSettings, getLayoutStyles } from "./utils";

export default function Bold(props) {
  const { settings, eventData } = props;
  const layoutSettings = getLayoutSettings(settings);
  const layoutStyles = getLayoutStyles(layoutSettings);
  return (
    <div className="upSYYl" style={layoutStyles.backgroundStyle}>
      <div
        className="upSYYl"
        style={{
          backgroundColor: layoutSettings.backgrounds.documentColor.color,
        }}
      >
        <div className="K12oeT" style={{ direction: "ltr" }}>
          <div className="nIf2eh">
            <div className="TZDN9_">
              {layoutSettings.logos.site_logo_image.image.id && (
                <div className="_TeIwe">
                  <img
                    src={layoutSettings.logos.site_logo_image.image.url}
                    alt="site_logo_image"
                    style={{
                      objectFit: "contain",
                      visibility: "visible",
                      maxWidth: "60px",
                      maxHeight: "60px",
                    }}
                  />
                </div>
              )}
              <span style={layoutStyles.titleStyle}>
                {eventData.eventTitle}
              </span>
            </div>
            <div className="CJEkGq">
              <span style={{ ...layoutStyles.detailsStyle }}>
                {eventData.eventDate}
              </span>
              <span style={{ ...layoutStyles.detailsStyle }}>
                {eventData.eventLocation}
              </span>
            </div>
            <div className="spe_8M Gg7kDh" style={layoutStyles.dividerStyle}>
              <div className="hD4yYc" style={{ "--borderPadding": "12pt" }}>
                {layoutSettings.display.show_ticket_price && (
                  <div className="IYXGYD">
                    <span className="gG_HWJ">
                      <span style={layoutStyles.labelStyle}>
                        {Label.ticketAndPrice}
                      </span>
                    </span>
                    <span className="cwt1m6">
                      <span style={layoutStyles.detailsStyle}>
                        {eventData.ticketName} - {eventData.price}
                      </span>
                    </span>
                  </div>
                )}
                <div className="s_bByr" style={{ justifyContent: "start" }}>
                  <div className="IYXGYD">
                    <span className="gG_HWJ">
                      <span style={layoutStyles.labelStyle}>
                        {Label.orderBy}
                      </span>
                    </span>
                    <span className="cwt1m6">
                      <span style={layoutStyles.detailsStyle}>
                        {eventData.ticketBuyerName}
                      </span>
                    </span>
                  </div>
                  {layoutSettings.display.show_payment_status && (
                    <div className="IYXGYD">
                      <span className="gG_HWJ">
                        <span style={layoutStyles.labelStyle}>
                          {Label.paymentStatus}
                        </span>
                      </span>
                      <span className="cwt1m6">
                        <span style={layoutStyles.detailsStyle}>
                          {eventData.orderStatus}
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {layoutSettings.display.show_qr_code && (
                <div
                  className="kYPkRW Gg7kDh pwOGjD RjeHZ5 ryhobB"
                  style={layoutStyles.dividerStyle}
                >
                  <img
                    className="cb_WCm"
                    alt="Ticket QR code"
                    src={eventData.checkInUrl}
                  />
                </div>
              )}
            </div>
            <div className="jUEhVb" style={{ justifyContent: "start" }}>
              {layoutSettings.display.show_order_number && (
                <div className="degm58">
                  <span
                    style={{
                      ...layoutStyles.labelStyle,
                      width: "100%",
                      display: "block",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {Label.orderNumber}
                  </span>
                  <span
                    style={{
                      ...layoutStyles.detailsStyle,
                      textAlign: "center",
                      width: "100%",
                      overflow: "visible",
                      display: "block",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {eventData.orderNumber}
                  </span>
                </div>
              )}
              {layoutSettings.display.show_order_date && (
                <div className="degm58">
                  <span
                    style={{
                      ...layoutStyles.labelStyle,
                      width: "100%",
                      display: "block",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {Label.orderDate}
                  </span>
                  <span
                    style={{
                      ...layoutStyles.detailsStyle,
                      textAlign: "center",
                      width: "100%",
                      overflow: "visible",
                      display: "block",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {eventData.orderDate}
                  </span>
                </div>
              )}
              {layoutSettings.display.show_ticket_number && (
                <div className="degm58">
                  <span
                    style={{
                      ...layoutStyles.labelStyle,
                      width: "100%",
                      display: "block",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {Label.ticketNumber}
                  </span>
                  <span
                    style={{
                      ...layoutStyles.detailsStyle,
                      textAlign: "center",
                      width: "100%",
                      overflow: "visible",
                      display: "block",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {eventData.ticketNumber}
                  </span>
                </div>
              )}
            </div>
            {layoutSettings.display.show_ticket_policy && (
              <span style={layoutStyles.policyStyle}>
                {eventData.ticketPolicy}
              </span>
            )}
          </div>
          {layoutSettings.images.bottom_image.image.id && (
            <div
              className="BFtBPu"
              style={{
                aspectRatio:
                  layoutSettings.images.bottom_image.resize === "FIT"
                    ? layoutSettings.images.bottom_image.image.width /
                      layoutSettings.images.bottom_image.image.height
                    : 2 / 1,
              }}
            >
              <img
                src={getEventImageUrl(layoutSettings.images.bottom_image, "bold")}
                alt="ticket_image"
                style={{
                  objectFit:
                    layoutSettings.images.bottom_image.resize === "FIT"
                      ? "contain"
                      : "cover",
                  visibility: "visible",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
