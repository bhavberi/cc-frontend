import { makeStyles } from "@material-ui/core/styles";

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

// styles {{{
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
});
// }}}

const ClubCard = ({ id, img, name, description, state }) => {
    const classes = useStyles();

    return (
        <Card variant="outlined">
            <CardActionArea>
                <CardMedia className={classes.media} image={img} title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ClubCard;
