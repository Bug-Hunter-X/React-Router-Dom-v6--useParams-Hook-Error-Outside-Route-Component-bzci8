In React Router Dom v6, attempting to access the `useParams` hook outside of a component using a route will result in an error.  The `useParams` hook relies on the routing context provided by the `BrowserRouter` or other router providers, and this context isn't available outside of route components.

```javascript
// Incorrect usage
import { useParams } from 'react-router-dom';

const userId = useParams().id; // Error: Cannot read properties of undefined (reading 'id')
```