import { Label } from "./constant";
import { getEventImageUrl, getLayoutSettings, getLayoutStyles, getLogoUrl } from "./utils";

export default function Professional(props) {
  const { settings, eventData } = props;
  const layoutSettings = getLayoutSettings(settings);
  const layoutStyles = getLayoutStyles(layoutSettings, "professional");
  return (
    <div
      className="Zi4NQd"
      style={{
        backgroundColor: layoutSettings.backgrounds.documentColor.color.slice(
          0,
          7,
        ),
        direction: "ltr",
      }}
    >
      <div className="ymQxpI">
        <div style={layoutStyles.backgroundStyle}>
          <div
            className="AKB_NI"
            style={{
              backgroundColor: layoutSettings.backgrounds.documentColor.color,
            }}
          >
            <div className="ReD5o5">
              {layoutSettings.logos.site_logo_image.image.id && (
                <div className="c1FQRU">
                  <img
                    src={getLogoUrl(layoutSettings.logos.site_logo_image.image, "professional")}
                    alt="site_logo_image"
                    style={{
                      objectFit: "contain",
                      visibility: "visible",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              )}
              <span style={layoutStyles.titleStyle}>
                {eventData.eventTitle}
              </span>
            </div>
            <div
              className="NIRoH_"
              style={{
                backgroundColor:
                  layoutSettings.backgrounds.documentColor.color.slice(0, 7),
              }}
            >
              {layoutSettings.display.show_qr_code && (
                <div className="DZbAKT" style={{ justifyContent: layoutStyles.textAlign }}>
                  <img
                    className="ezZjL1"
                    alt="Ticket QR code"
                    src={eventData.checkInUrl}
                  />
                </div>
              )}
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
              <div className="IYXGYD">
                <span className="gG_HWJ">
                  <span style={layoutStyles.labelStyle}>{Label.orderBy}</span>
                </span>
                <span className="cwt1m6">
                  <span style={layoutStyles.detailsStyle}>
                    {eventData.ticketBuyerName}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="QHFr6q">
          <div className="OOmSUM">
            <div className="AiJJYU">
              <div className="IYXGYD p104iM">
                <span className="gG_HWJ">
                  <span style={layoutStyles.labelStyle}>
                    {Label.timeAndLocation}
                  </span>
                </span>
                <span className="cwt1m6">
                  <span style={layoutStyles.detailsStyle}>
                    {eventData.eventDate}, {eventData.eventLocation}
                  </span>
                </span>
              </div>
            </div>
            {(layoutSettings.display.show_order_number ||
              layoutSettings.display.show_ticket_number ||
              layoutSettings.display.show_order_date ||
              layoutSettings.display.show_payment_status) && (
              <div className="uy_WGC">
                {layoutSettings.display.show_order_number && (
                  <div className="IYXGYD">
                    <span className="gG_HWJ">
                      <span style={layoutStyles.labelStyle}>
                        {Label.orderNumber}
                      </span>
                    </span>
                    <span className="cwt1m6">
                      <span style={layoutStyles.detailsStyle}>
                        {eventData.orderNumber}
                      </span>
                    </span>
                  </div>
                )}
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
                {layoutSettings.display.show_order_date && (
                  <div className="IYXGYD">
                    <span className="gG_HWJ">
                      <span style={layoutStyles.labelStyle}>
                        {Label.orderDate}
                      </span>
                    </span>
                    <span className="cwt1m6">
                      <span style={layoutStyles.detailsStyle}>
                        {eventData.orderDate}
                      </span>
                    </span>
                  </div>
                )}
                {layoutSettings.display.show_ticket_number && (
                  <div className="IYXGYD">
                    <span className="gG_HWJ">
                      <span style={layoutStyles.labelStyle}>
                        {Label.ticketNumber}
                      </span>
                    </span>
                    <span className="cwt1m6">
                      <span style={layoutStyles.detailsStyle}>
                        {eventData.ticketNumber}
                      </span>
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            className="Gg7kDh pwOGjD RjeHZ5 rS3D7n"
            style={layoutStyles.dividerStyle}
          ></div>
          {layoutSettings.display.show_ticket_policy && (
            <span style={layoutStyles.policyStyle}>
              {eventData.ticketPolicy}
            </span>
          )}
        </div>
      </div>
      {layoutSettings.images.bottom_image.image.id && (
        <div
          className="Etoy1n"
          style={{
            aspectRatio:
              layoutSettings.images.bottom_image.resize === "FIT"
                ? layoutSettings.images.bottom_image.image.width /
                  layoutSettings.images.bottom_image.image.height
                : 16 / 9,
          }}
        >
          <img
            src={getEventImageUrl(layoutSettings.images.bottom_image, "professional")}
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
  );
}