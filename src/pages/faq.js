import React from "react"
import Layout from "../components/layout"
import icon from "../assets/images/icon-question.svg"

const Faq = () => {
  return (
    <Layout>
      <section className="section-faq container">
        <h2 className="text-center">FAQ</h2>
        <dl class="accordion mt-3" id="faq_accordion">
          <div class="accordion-item wow" data-wow-delay="0.4s">
            <div class="accordion-item__icon bg-light-primary">
              <img src={icon} alt="Question Mark" />
            </div>
            <div>
              <dt
                class="accordion-item__title"
                data-toggle="collapse"
                data-target="#faq2"
                aria-expanded="false"
                aria-controls="faq2"
              >
                Nor is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but occasionally
                circumstances occur?
              </dt>
              <dd
                class="collapse accordion-item__content"
                id="faq2"
                data-parent="#faq_accordion"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                ipsam fugit accusantium aut, sint eos porro atque adipisci
                explicabo ea, error ipsum amet quasi facere totam cupiditate?
                Odio, reprehenderit sapiente.
              </dd>
              <hr />
            </div>
          </div>
        </dl>
      </section>
    </Layout>
  )
}

export default Faq
