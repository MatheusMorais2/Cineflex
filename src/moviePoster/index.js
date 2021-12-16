import './style.css';

export default function MoviePoster ({height, width}) {
    return (
        <div className='movie-poster' style={{height: `${height}px`, width: `${width}px`}}>
            <img src='https://s3-alpha-sig.figma.com/img/00b4/737f/db39d65a7e5e7912d02062f7a1269acc?Expires=1640563200&Signature=c~VtIvqhvyf0JhLtzq5GoywgV7GqRILSKroeb1sFPuBUS8UNTIrvD4F8TzALWcG8MKTbE4wZEViHyk6HoOsHULHMgc0yO0Eo-miXw1MMTnRFLvPObwmHJnA-OdMKY2MIej7iKPychu0Q1fDFHzcAWHSHzf3VnXA1gRNHwdV8KxdAs2rKzPulf8ETaxDahGrz-QxtnFQY8fb8uAPCqK2j-eWd4kCphtD3Q7wqnc-HBqLmbTPHcWBE4K7wMHMfJiczL52BU5G8CBypmckrlmyaB0dDjy73AngdmXC90VRt48NVuRUbCBTKEsvpMIov6Cu0RlGEqk0B-Z8kizbZwucC4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='Movie Poster'></img>
        </div>
    )
}