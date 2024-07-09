import { Fixture } from "../Sections/Tips";

interface TipImageProps {
  fixture: Fixture;
}

export default function TipImage({ fixture }: TipImageProps) {
  return (
    <img
      // src={iconConverter[fixture.home_team]}
      alt={fixture.home_team}
      height={45}
      width={60} // Corrected typo in width
    />
  );
}
