import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
  init: () => {
    library.add(faFacebook);
    library.add(faLinkedin);
    library.add(faEnvelope);
  }
};
