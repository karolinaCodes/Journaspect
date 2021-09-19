import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Rating(props) {
    return (
        <div style={{display: 'inline-flex'}}>
            {[1,2,3,4,5].map((result) => (
                <div>
                    {props.value >= result ? (
                        <StarIcon style={{color:'#FBBC04'}} />
                    ) : (
                        <StarBorderIcon />
                    )}
                </div>
            ))}
        </div>
    );
}
