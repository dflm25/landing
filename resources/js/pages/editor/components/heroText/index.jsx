import React from "react"

export default function HeroText() {
    return (
        <div class="container text-center py-3">
            <div class="p-5 mb-4 lc-block">
                <div class="lc-block mb-4">
                    <div editable="rich">
                        <h2 class="fw-bold display-2">
                            The quick brown fox jumps
                        </h2>
                        <h2 class="fw-bold display-2">
                            over the lazy dog
                            <br />
                        </h2>
                    </div>
                </div>
                <div class="lc-block mb-5">
                    <div editable="rich">
                        <p class="lead">
                            Using a series of utilities, you can create this
                            jumbotron.
                            <br />
                            just like the one in previous versions of Bootstrap.
                        </p>
                    </div>
                </div>
                {/* <div class="lc-block mb-2">
                    <a class="btn btn-primary" href="#" role="button">
                        Click me, I'm a button
                    </a>
                </div> */}
            </div>
        </div>
    )
}
