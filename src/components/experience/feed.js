import {properties} from "../../configuration/config";
import ReactStars from "react-rating-stars-component";

const {backend, frontend} = properties.text.experiences;
const backendExperiences = [{
    h4: backend.node, stars: 4,
}, {
    h4: backend.microservice, stars: 4,
}, {
    h4: backend.docker, stars: 2,
}, {
    h4: backend.k8s, stars: 2,
}, {
    h4: backend.jenkins, stars: 2,
},];

const frontendExperiences = [{
    h4: frontend.javascript, stars: 3,
}, {
    h4: frontend.react, stars: 1,
}, {
    h4: frontend.html, stars: 1,
}, {
    h4: frontend.css, stars: 1,
},];

const defaultExperienceTemplate = (h4, stars) => {
    return [<article className="experience_details">
        <div>
            <h4>{h4}</h4>
            <small className="text-light">

                <ReactStars
                    count={5}
                    size={17}
                    activeColor={properties.text.starsActiveColor}
                    value={stars}
                    edit={false}
                />

            </small>
        </div>
    </article>,];
};

export {backendExperiences, frontendExperiences, defaultExperienceTemplate};
