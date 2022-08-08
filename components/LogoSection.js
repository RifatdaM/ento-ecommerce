import Image from "next/image";
import React from "react";
import partnerLogo1 from "../public/partnerLogo1.png";
import partnerLogo2 from "../public/partnerLogo2.png";
import partnerLogo3 from "../public/partnerLogo3.png";
import partnerLogo4 from "../public/partnerLogo4.png";
import partnerLogo5 from "../public/partnerLogo5.png";
import partnerLogo6 from "../public/partnerLogo6.png";

function LogoSection() {
  return (
    <div className="py-20">
      {/* TODO: LogoSection */}
      <div className="container items-center grid grid-cols-2 md:grid-cols-3 lg:flex gap-20 grayscale">
        <div>
          <Image src={partnerLogo1} alt="partnerLogo1" />
        </div>
        <div>
          <Image src={partnerLogo2} alt="partnerLogo2" />
        </div>
        <div>
          <Image src={partnerLogo3} alt="partnerLogo3" />
        </div>
        <div>
          <Image src={partnerLogo4} alt="partnerLogo4" />
        </div>
        <div>
          <Image src={partnerLogo5} alt="partnerLogo5" />
        </div>
        <div>
          <Image src={partnerLogo6} alt="partnerLogo6" />
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
