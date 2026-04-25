import { Label } from "./constant";
import { getLayoutSettings, getLayoutStyles } from "./utils";

export default function Classic(settings, eventData) {
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
        <div
          className="u8j5sf"
          style={{ direction: "ltr", "--additionalContainerWidth": "0pt" }}
        >
          <div>
            <div
              style={{
                backgroundColor:
                  layoutSettings.backgrounds.documentColor.color.slice(0, 7),
              }}
            >
              <div className="UD6Gu5 Gg7kDh" style={layoutStyles.dividerStyle}>
                <div
                  className="Gg7kDh pwOGjD ryhobB rS3D7n"
                  style={layoutStyles.dividerStyle}
                >
                  <div className="XjZ8Px">
                    <span style={layoutStyles.titleStyle}>
                      {eventData.eventTitle}
                    </span>
                  </div>
                </div>
                {layoutSettings.display.show_ticket_number && (
                  <div className="d0tTIS">
                    <div className="IYXGYD AYRW6G">
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
                  </div>
                )}
              </div>
              <div
                className="ODZqCq Gg7kDh pwOGjD"
                style={layoutStyles.dividerStyle}
              >
                <div
                  className="Gg7kDh pwOGjD ryhobB rS3D7n"
                  style={layoutStyles.dividerStyle}
                >
                  <div className="J9MbHQ">
                    <div
                      className="Gg7kDh pwOGjD RjeHZ5 rS3D7n"
                      style={layoutStyles.dividerStyle}
                    >
                      <div className="f0_zDW">
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
                      </div>
                    </div>
                    <div className="aRMnJS">
                      <div
                        className="sxmtOE o9wRTs Gg7kDh pwOGjD ryhobB rS3D7n"
                        style={layoutStyles.dividerStyle}
                      >
                        <div className="IYXGYD AYRW6G">
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
                      </div>
                      {layoutSettings.display.show_order_date && (
                        <div
                          className="MuXDc8 ji4SrF Gg7kDh pwOGjD RjeHZ5 ryhobB rS3D7n"
                          style={layoutStyles.dividerStyle}
                        >
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
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="VCBIdI">
                  <div className="XeeO1t">
                    {layoutSettings.display.show_order_number && (
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
                  {layoutSettings.display.show_qr_code && (
                    <div
                      className="niimv4"
                      style={{
                        justifyContent: "start",
                      }}
                    >
                      <img
                        className="xx_uJW"
                        alt="Ticket QR code"
                        src={eventData.checkInUrl}
                      ></img>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {(layoutSettings.display.show_ticket_policy ||
              layoutSettings.logos.site_logo_image.image.id) && (
              <div className="ZbqIaE">
                {layoutSettings.display.show_ticket_policy && (
                  <div className="k0w2Nx">
                    <span style={layoutStyles.policyText}>
                      ${eventData.ticketPolicy}
                    </span>
                  </div>
                )}
                {layoutSettings.logos.site_logo_image.image.id && (
                  <div className="biW1Xj">
                    <img
                      src={layoutSettings.logos.site_logo_image.image.url}
                      alt="ticket_logo_image"
                      style={{
                        objectFit: "contain",
                        visibility: "visible",
                        maxWidth: "186px",
                        maxHeight: "132px",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          {layoutSettings.images.event_image.image.id && (
            <div
              className="lHRtUo"
              style={{
                aspectRatio:
                  layoutSettings.images.event_image.resize === "FIT"
                    ? layoutSettings.images.event_image.image.width /
                      layoutSettings.images.event_image.image.height
                    : 16 / 9,
              }}
            >
              <img
                src={layoutSettings.images.event_image.image.url}
                alt="ticket_image"
                style={{
                  objectFit:
                    layoutSettings.images.event_image.resize === "FIT"
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
