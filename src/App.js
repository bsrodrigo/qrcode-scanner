import { makeStyles } from "@material-ui/styles";
import DocumentDetails from "./modules/scanner/pages/document-details";
const useStyles = makeStyles({
  root: {
    background: '#f0f0f0',
    height: '100vh'
  },
});
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DocumentDetails />
    </div>
  );
}

export default App;
