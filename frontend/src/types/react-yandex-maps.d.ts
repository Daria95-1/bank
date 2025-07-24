declare module '@pbe/react-yandex-maps' {
  import { ReactNode, CSSProperties } from 'react';

  export interface YMapsProps {
    children?: ReactNode;
    query?: {
      lang?: string;
      apikey?: string;
      coordorder?: string;
      load?: string;
    };
  }

  export const YMaps: (props: YMapsProps) => JSX.Element;

  export interface MapProps {
    defaultState?: {
      center: [number, number];
      zoom: number;
    };
    state?: {
      center?: [number, number];
      zoom?: number;
    };
    width?: string | number;
    height?: string | number;
    children?: ReactNode;
    style?: CSSProperties;
    options?: Record<string, unknown>;
  }

  export const Map: (props: MapProps) => JSX.Element;

  export interface PlacemarkProps {
    geometry: [number, number];
    options?: Record<string, unknown>;
    properties?: Record<string, unknown>;
    modules?: string[];
    onClick?: (e: YMapEvent) => void;
  }

  export const Placemark: (props: PlacemarkProps) => JSX.Element;

  export interface YMapEvent {
    originalEvent: {
      domEvent: {
        type: string;
        originalEvent: MouseEvent;
      };
    };
    get: (key: string) => unknown;
    getSourceEvent: () => unknown;
    getTarget: () => unknown;
  }
}
