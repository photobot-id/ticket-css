import { Label } from "./constant";
import { getLayoutSettings, getLayoutStyles } from "./utils";

export default function Chic(props) {
  const { settings, eventData } = props;
  const layoutSettings = getLayoutSettings(settings);
  const layoutStyles = getLayoutStyles(layoutSettings);
  return (
    <div className="upSYYl" style={layoutStyles.backgroundStyle}>
      <div
        className="upSYYl"
        style={{
          backgroundColor: layoutSettings.backgrounds.documentColor.color.split(
            0,
            7,
          ),
        }}
      >
        <div
          className="RStRbM"
          style={{ direction: "ltr", "--borderPadding": "14pt" }}
        >
          <div className="saqd8G">
            {layoutSettings.images.top_image.image.id && (
              <div className="R1noC_">
                <img
                  src={layoutSettings.images.top_image.image.url}
                  alt="ticket_image"
                  style={{
                    objectFit:
                      layoutSettings.images.top_image.resize === "FIT"
                        ? "contain"
                        : "cover",
                    visibility: "visible",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            )}
            <div className="BmRRXP">
              <div className="VNlibP">
                {layoutSettings.logos.site_logo_image.image.id && (
                  <div className="wZr1LF">
                    <img
                      src={layoutSettings.logos.site_logo_image.image.url}
                      alt="site_logo_image"
                      style={{
                        objectFit: "contain",
                        visibility: "visible",
                        maxWidth: "65px",
                        maxHeight: "65px",
                      }}
                    />
                  </div>
                )}
                <span style={layoutStyles.titleStyle}>
                  {eventData.eventTitle}
                </span>
              </div>
              <div className="wQLMNP Gg7kDh" style={layoutStyles.dividerStyle}>
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
                {/* ${dateAndLocation} */}
                <div className="JlZpj1">
                  <div className="Gffnnf">
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
                    <div className="pwVvAp">
                      <img
                        className="K9_7TJ"
                        alt="Ticket QR code"
                        src={eventData.checkInUrl}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="Gg7kDh pwOGjD RjeHZ5 rS3D7n"
            style={layoutStyles.dividerStyle}
          ></div>
          <div className="pZcVJ2">
            <div className="vZVeBJ">
              {layoutSettings.display.show_ticket_number && (
                <div>
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
            {layoutSettings.display.show_ticket_policy && (
              <div class="JhaI3p">
                <span style={layoutStyles.policyStyle}>
                  {eventData.ticketPolicy}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
