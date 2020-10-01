import record from './record';
import { Replayer } from './replay';
import { mirror } from './utils';
import * as utils from './utils';
export {
  EventType,
  IncrementalSource,
  MouseInteractions,
  ReplayerEvents,
  // added by @jay-khatri for convenience.
  eventWithTime,
  incrementalData,
  mutationData,
  mousemoveData,
  mouseInteractionData,
  scrollData,
  viewportResizeData,
  inputData,
  mediaInteractionData,
  styleSheetRuleData,
  canvasMutationData,
  fontData,
} from './types';
declare const addCustomEvent: <T>(tag: string, payload: T) => void;
export { record, addCustomEvent, Replayer, mirror, utils };
