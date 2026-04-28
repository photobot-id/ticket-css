import { Label } from "./constant";
import { getEventImageUrl, getLayoutSettings, getLayoutStyles } from "./utils";

export default function Playful(props) {
  const { settings, eventData } = props;
  const layoutSettings = getLayoutSettings(settings);
  const layoutStyles = getLayoutStyles(layoutSettings);
  return (
    <div className="upSYYl">
      <div
        className="upSYYl"
        style={{
          backgroundColor: layoutSettings.backgrounds.documentColor.color,
        }}
      >
        <div
          className="orL77e"
          style={{ direction: "ltr", "--borderPadding": "16pt" }}
        >
          <div className="w5bJ7f">
            <div className="Kf3qhl">
              <span style={layoutStyles.titleStyle}>
                {eventData.eventTitle}
              </span>
              {layoutSettings.logos.site_logo_image.image.id && (
                <div>
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
            </div>
            <div className="VYq4ny">
              {layoutSettings.display.show_qr_code && (
                <div>
                  <img
                    className="WYQ1EG"
                    alt="Ticket QR code"
                    src={eventData.checkInUrl}
                  />
                </div>
              )}
              <div className="jZl05r Gg7kDh" style={layoutStyles.dividerStyle}>
                <div className="IYXGYD">
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
                {(layoutSettings.display.show_ticket_price ||
                  layoutSettings.display.show_payment_status) && (
                  <div className="qMFmhU" style={{ justifyContent: "start" }}>
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
            <div className="Xg6zNv">
              {(layoutSettings.display.show_ticket_number ||
                layoutSettings.display.show_order_number ||
                layoutSettings.display.show_order_date) && (
                <div className="uhPPLC">
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
                </div>
              )}
              {layoutSettings.display.show_ticket_policy && (
                <div>
                  <span style={layoutStyles.policyStyle}>
                    {eventData.ticketPolicy}
                  </span>
                </div>
              )}
            </div>
          </div>
          {layoutSettings.images.ticket_image.image.id && (
            <div
              className="wXv7hB"
              style={{
                aspectRatio:
                  layoutSettings.images.ticket_image.resize === "FIT"
                    ? layoutSettings.images.ticket_image.image.width /
                      layoutSettings.images.ticket_image.image.height
                    : 16 / 9,
              }}
            >
              <img
                src={getEventImageUrl(layoutSettings.images.ticket_image, "playful")}
                alt="ticket_image"
                style={{
                  objectFit:
                    layoutSettings.images.ticket_image.resize === "FIT"
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
