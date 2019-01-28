import React, { Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import PropTypes from 'prop-types';

const styles = {
    card: {
      width: 300,
      minWidth: 275,
      height: 300,
      backgroundColor: red[500],
    },
    title: {
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
  };

class MyCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            info: '',
        }
    }
    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                      Card
                    </Typography>
                </CardContent>
            </Card>

        )
    }
}
MyCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(MyCard);