The solution is to ensure that `useParams` is used within a component that is rendered within a route.  The parameters can then be passed down as props if needed.

```javascript
import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
}

function MyComponent() {
  // Correct usage, parameters passed as props
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch data based on userId
  }, [userId]);

  return (
    <div>
      {/* ... */}
      <UserPage />
    </div>
  );
}

// Route definition
<Route path="/users/:id" element={<UserPage />} />
```