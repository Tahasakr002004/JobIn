import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
function RequireAuth ( { user, children } ) {
  // children would be <hom></hom> and header in app.jsx
  const navigate = useNavigate();
  useEffect( () => {
    if ( !user ) {
      navigate( '/', { replace: true } );
      return;
    }
  }, [user] );
  return children;
}
const mapStateToProps = ( state ) => {
  return {
     user: state.userState.user,
   }
 } 

export default connect( mapStateToProps )( RequireAuth );