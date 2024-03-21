import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Stream.css";
import { PromotedBanner } from "./PromotedBanner";
export const Stream = () => {
    return (
        <section className="b_promoted_banners">
            <Carousel infiniteLoop autoPlay showStatus={false} className="h-100">
                <PromotedBanner
                    description={
                        "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside."
                    }
                    language={"English"}
                    slug={"1h 32m . Adventure, Animation, Comedy . U"}
                    movieName={"Kung fu panda"}
                    title={"Brand new release every friday"}
                    posterPath={"Promoted/et00001563-dsqtbnheks-portrait.jpg"}
                    path={
                        "url(Promoted/et00001563-flwjdhzdjp-horizontal_poster_still.jpg)"
                    }
                />
                <PromotedBanner
                    isPremiere
                    description={
                        "Set in the underbelly of the Mumbai underworld, the story revolves around the succession battle of mafia don Nawab Khan, who is suffering from blood cancer and has only a few days to live. Who is the Aazam of this battle of defeat and victory?"
                    }
                    language={"Hindi"}
                    slug={"2h 8m • Crime, Mystery, Thriller • UA"}
                    movieName={"Aazam"}
                    title={"Brand new release every friday"}
                    posterPath={"Promoted/et00343041-lasrumkllk-portrait.jpg"}
                    path={
                        "url(Promoted/et00343041-nkkkxczqvw-horizontal_poster_still.jpg)"
                    }
                />
                <PromotedBanner
                    isPremiere
                    description={
                        "Now that Chris and his girlfriend, Rose have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway in her parent`s home upstate. At first, Chris reads the family`s overly accommodating behavior as nervous attempts to deal with their daughter`s interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he could have never imagined."
                    }
                    language={"English"}
                    slug={"1h 44m • Drama, Horror, Thriller • A"}
                    movieName={"Get Out"}
                    title={"Brand new release every friday"}
                    posterPath={"Promoted/et00047349-dxwfdnknfb-portrait.jpg"}
                    path={
                        "url(Promoted/et00047349-nwyvywvcsq-horizontal_poster_still.jpg)"
                    }
                />
                <PromotedBanner
                    description={
                        "Feature adaptation of Frank Herbert`s science fiction novel, Dune revolves around Paul Atreides, who leads nomadic tribes in a battle to control the desert planet Arrakis."
                    }
                    language={"English"}
                    slug={"2h 35m • Action, Adventure, Drama, Sci-Fi • UA"}
                    movieName={"Dune"}
                    title={"Brand new release every friday"}
                    posterPath={"Promoted/et00122526-lntlczevkx-portrait.jpg"}
                    path={
                        "url(Promoted/et00122526-eqnsuankcp-horizontal_poster_still.jpg)"
                    }
                />
                <PromotedBanner
                    description={
                        "Bookmyshow Stream Runtime: 3h 3 mins The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin."
                    }
                    language={"English"}
                    slug={"3h 10m • Biography, Drama, Historical • UA"}
                    movieName={"Oppenheimer"}
                    title={"Brand new release every friday"}
                    posterPath={"Promoted/et00347867-lvtgffmarq-portrait.jpg"}
                    path={
                        "url(Promoted/et00347867-xrnfkldssf-horizontal_poster_still.jpg)"
                    }
                />
            </Carousel>
        </section>
    );
};
