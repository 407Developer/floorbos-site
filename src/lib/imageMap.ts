import floorBossIcon from "../assets/images/floor-boss-icon.jpg";
import gapFiller from "../assets/images/gap-filler.jpg";
import isocolVta from "../assets/images/isocol-vta.jpeg";
import noMoreNail from "../assets/images/no-more-nail.jpeg";
import oakDetail1 from "../assets/images/oak-detail-1.jpg";
import oakDetail2 from "../assets/images/oak-detail-2.jpg";
import oakMain from "../assets/images/oak-main.jpeg";
import oakTexture from "../assets/images/oak-texture.jpg";
import skirting1 from "../assets/images/skirting-1.jpeg";
import skirting2 from "../assets/images/skirting-2.jpg";
import skirting3 from "../assets/images/skirting-3.jpg";
import skirting4 from "../assets/images/skirting-4.jpg";
import spc1 from "../assets/images/spc-1.jpeg";
import spc2 from "../assets/images/spc-2.jpeg";
import spc3 from "../assets/images/spc-3.jpeg";
import spc4 from "../assets/images/spc-4.jpeg";
import topBondVta from "../assets/images/top-bond-vta.jpeg";
import transitionStrip from "../assets/images/transition-strip.jpeg";
import vinyl1 from "../assets/images/vinyl-1.jpg";
import vinyl3 from "../assets/images/vinyl-3.jpg";
import vinyl6 from "../assets/images/vinyl-6.jpg";
import vinyl8 from "../assets/images/vinyl-8.jpg";

export const imageByPath: Record<string, ImageMetadata> = {
  "/images/floor-boss-icon.jpg": floorBossIcon,
  "/images/gap-filler.jpg": gapFiller,
  "/images/isocol-vta.jpeg": isocolVta,
  "/images/no-more-nail.jpeg": noMoreNail,
  "/images/oak-detail-1.jpg": oakDetail1,
  "/images/oak-detail-2.jpg": oakDetail2,
  "/images/oak-main.jpeg": oakMain,
  "/images/oak-texture.jpg": oakTexture,
  "/images/skirting-1.jpeg": skirting1,
  "/images/skirting-2.jpg": skirting2,
  "/images/skirting-3.jpg": skirting3,
  "/images/skirting-4.jpg": skirting4,
  "/images/spc-1.jpeg": spc1,
  "/images/spc-2.jpeg": spc2,
  "/images/spc-3.jpeg": spc3,
  "/images/spc-4.jpeg": spc4,
  "/images/top-bond-vta.jpeg": topBondVta,
  "/images/transition-strip.jpeg": transitionStrip,
  "/images/vinyl-1.jpg": vinyl1,
  "/images/vinyl-3.jpg": vinyl3,
  "/images/vinyl-6.jpg": vinyl6,
  "/images/vinyl-8.jpg": vinyl8,
};

export function resolveImage(path: string) {
  return imageByPath[path];
}
