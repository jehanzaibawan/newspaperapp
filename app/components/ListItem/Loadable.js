/**
 *
 * Asynchronously loads the component for ListItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
