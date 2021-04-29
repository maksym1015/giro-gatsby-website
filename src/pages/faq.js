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
                data-target="#faq1"
                aria-expanded="false"
                aria-controls="faq1"
              >
                Nor is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but occasionally
                circumstances occur?
              </dt>
              <dd
                class="collapse accordion-item__content"
                id="faq1"
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
          <div class="accordion-item wow fadeInDown" data-wow-delay="0.4s">
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
          <div class="accordion-item wow fadeInDown" data-wow-delay="0.6s">
            <div class="accordion-item__icon bg-light-primary">
              <img src={icon} alt="Question Mark" />
            </div>
            <div>
              <dt
                class="accordion-item__title"
                data-toggle="collapse"
                data-target="#faq3"
                aria-expanded="false"
                aria-controls="faq3"
              >
                McClintock's eye for detail certainly helped narrow the
                whereabouts of lorem ipsum's origin, however?
              </dt>
              <dd
                class="collapse accordion-item__content"
                id="faq3"
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
          <div class="accordion-item wow fadeInDown" data-wow-delay="0.8s">
            <div class="accordion-item__icon bg-light-primary">
              <img src={icon} alt="Question Mark" />
            </div>
            <div>
              <dt
                class="accordion-item__title"
                data-toggle="collapse"
                data-target="#faq4"
                aria-expanded="false"
                aria-controls="faq4"
              >
                And anyways, as Cecil Adams reasoned, think graphic arts supply
                houses were hiring classics scholars in the 1960s?
              </dt>
              <dd
                class="collapse accordion-item__content"
                id="faq4"
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
