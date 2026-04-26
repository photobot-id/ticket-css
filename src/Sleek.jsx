import { Label } from "./constant";
import { getLayoutSettings, getLayoutStyles } from "./utils";

export default function Sleek(props) {
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
        <div className="BZAYbV" style={{ direction: "ltr" }}>
          <div className="_tXe5k">
            <div className="CTU4KW">
              <div className="FpHVx5">
                <span style={layoutStyles.titleStyle}>
                  {eventData.eventTitle}
                </span>
              </div>
              {layoutSettings.logos.site_logo_image.image.id && (
                <div className="DRjfeI">
                  <img
                    src={layoutSettings.logos.site_logo_image.image.url}
                    alt="ticket_logo_image"
                    style={{
                      objectFit: "contain",
                      visibility: "visible",
                      maxWidth: "50px",
                      maxHeight: "50px",
                    }}
                  />
                </div>
              )}
            </div>
            <div className="RH5irX">
              <div
                className="Gg7kDh pwOGjD RjeHZ5 rS3D7n"
                style={layoutStyles.dividerStyle}
              ></div>
              <div className="Uucjac" style={{ justifyContent: "start" }}>
                <div
                  className="QqLe7o Gg7kDh pwOGjD ryhobB rS3D7n"
                  style={layoutStyles.dividerStyle}
                >
                  <span
                    style={{
                      ...layoutStyles.detailsStyle,
                      width: "initial",
                      textAlign: "left",
                    }}
                  >
                    {eventData.eventLocation}
                  </span>
                </div>
                <div className="Lffl8m">
                  <span
                    style={{
                      ...layoutStyles.detailsStyle,
                      width: "initial",
                      textAlign: "left",
                    }}
                  >
                    {eventData.eventDate}
                  </span>
                </div>
              </div>
              <div
                className="Gg7kDh pwOGjD RjeHZ5 rS3D7n"
                style={layoutStyles.dividerStyle}
              ></div>
              <div
                className="Gg7kDh pwOGjD RjeHZ5 rS3D7n"
                style={layoutStyles.dividerStyle}
              >
                <div className="e6i2Lz">
                  {/* cRTiLc */}
                  <div className={`NjdZM2${(layoutSettings.display.show_qr_code ||
                    layoutSettings.display.show_ticket_number) ? "" : " cRTiLc"}`}>
                    <div
                      className={`EOqirQ Gg7kDh pwOGjD${(layoutSettings.display.show_qr_code ||
                    layoutSettings.display.show_ticket_number) ? "" : " RjeHZ5"}${(layoutSettings.display.show_order_date ||
                    layoutSettings.display.show_ticket_number) ? "" : " ryhobB"} rS3D7n`}
                      style={layoutStyles.dividerStyle}
                    >
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
                    {(layoutSettings.display.show_payment_status ||
                      layoutSettings.display.show_order_number ||
                      layoutSettings.display.show_order_date) && (
                      <div
                        className={`Gg7kDh pwOGjD${(layoutSettings.display.show_qr_code ||
                    layoutSettings.display.show_ticket_number) ? "" : " RjeHZ5"} ryhobB rS3D7n`}
                        style={layoutStyles.dividerStyle}
                      >
                        <div
                          className="o0PQRT"
                          style={{ justifyContent: "start" }}
                        >
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
                      </div>
                    )}
                  </div>
                  {(layoutSettings.display.show_qr_code ||
                    layoutSettings.display.show_ticket_number) && (
                    <div className="sKgMr7">
                      {layoutSettings.display.show_ticket_number && (
                        <div className="vo6dgm">
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
                        </div>
                      )}
                      {layoutSettings.display.show_qr_code && (
                        <div
                          className="xyvJkj"
                          style={{ justifyContent: "start" }}
                        >
                          <img
                            className="rUEhIv"
                            alt="Ticket QR code"
                            src={eventData.checkInUrl}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {layoutSettings.display.show_ticket_policy && (
              <span style={layoutStyles.policyStyle}>
                {eventData.ticketPolicy}
              </span>
            )}
          </div>
          {layoutSettings.images.bottom_image.image.id && (
            <div
              className="blnpue"
              style={{
                aspectRatio:
                  layoutSettings.images.bottom_image.resize === "FIT"
                    ? layoutSettings.images.bottom_image.image.width /
                      layoutSettings.images.bottom_image.image.height
                    : 16 / 10,
              }}
            >
              <img
                src={layoutSettings.images.bottom_image.image.url}
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
          {/* ${eventImage} */}
        </div>
      </div>
    </div>
  );
}
