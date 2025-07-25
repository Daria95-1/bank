import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import type { BranchesProps } from '../const/const';

const YandexMapComponent = ({ data }: { data: BranchesProps[] }) => {
  return (
    <YMaps>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 12 }} width="inherit" height="inherit">
        {data.map((branch: BranchesProps, index: number) => {
          return <Placemark key={index} geometry={branch.coordinates} />;
        })}
      </Map>
    </YMaps>
  );
};

export default YandexMapComponent;