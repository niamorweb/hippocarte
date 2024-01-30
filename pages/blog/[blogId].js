import { useParams } from "next/navigation";
import blogsData from "../../data/content/blogs/blogs.json";
import React from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="max-w-[1000px] mx-auto pt-16 pb-40 flex flex-col gap-28">
      {blogsData.slice(0, 1).map((item) => (
        <div className="flex flex-col gap-8">
          <div className="text-center flex flex-col justify-center gap-4 max-w-[500px] mx-auto">
            <span className="text-3xl font-semibold">{item.title}</span>
            <span className="text-sm text-grey">{item.date}</span>
          </div>
          <Image
            className="mx-auto rounded-xl"
            src={item.image}
            width={600}
            height={400}
            alt={item.title}
          />
          <div className="flex flex-col gap-4 mt-10">
            <p className="mb-6 text-darkGrey">
              Les progrès constants dans le domaine de l'oncologie offrent de
              l'espoir aux personnes confrontées au défi du cancer. Dans cet
              article, le Dr. Marie Dupont, éminente spécialiste en oncologie,
              partage son expertise sur les avancées les plus récentes dans le
              traitement du cancer. Ces développements témoignent des efforts
              incessants de la communauté médicale pour améliorer les options
              thérapeutiques et accroître les chances de guérison.
            </p>

            <h4>Les Thérapies Innovantes en Lumière :</h4>
            <p className="mb-6 text-darkGrey">
              L'article met en lumière les thérapies innovantes qui émergent
              comme des bouées d'espoir pour les patients. Des approches
              médicales novatrices, des traitements ciblés et des stratégies
              personnalisées sont examinés en détail. Le Dr. Dupont explique
              comment ces nouvelles méthodes contribuent à maximiser
              l'efficacité des traitements tout en minimisant les effets
              secondaires, offrant ainsi une meilleure qualité de vie aux
              patients atteints de cancer.
            </p>

            <h4>Impact sur la Communauté Médicale :</h4>
            <p className="mb-6 text-darkGrey">
              Les découvertes présentées dans cet article ne se limitent pas
              seulement aux aspects cliniques. Le Dr. Marie Dupont explore
              également l'impact de ces avancées sur la communauté médicale dans
              son ensemble. Comment ces nouvelles perspectives influent-elles
              sur la formation des médecins, la recherche future et les
              approches collaboratives pour lutter contre le cancer ? C'est une
              question cruciale qui est abordée pour comprendre l'ensemble du
              paysage médical.
            </p>

            <h4>Conclusion et Espoir pour l'Avenir :</h4>
            <p className="mb-6 text-darkGrey">
              En conclusion, cet article offre une perspective captivante sur
              les progrès récents dans le traitement du cancer. Le Dr. Marie
              Dupont souligne l'importance de rester optimiste face à ces
              avancées, tout en reconnaissant que la recherche continue est
              essentielle. L'engagement envers l'innovation médicale et le
              partage des connaissances ouvrent la voie à un avenir où la lutte
              contre le cancer sera encore plus efficace, offrant ainsi une
              lueur d'espoir pour les patients et leurs familles.
            </p>
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-6">
        <h3>D'autres articles qui pourraient vous intéresser : </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {blogsData.slice(0, 3).map((blog, index) => (
            <div key={index} className="flex flex-col gap-6">
              <Image
                className="rounded-xl w-full h-[200px] object-cover "
                width={300}
                height={300}
                src={blog.image}
                alt=""
              />
              <div className="flex flex-col justify-around h-full gap-2">
                <div className="flex gap-2 items-center text-blue-500 font-semibold text-sm">
                  <span>{blog.category}</span>
                  <span> - </span>
                  <span>Lecture : 10 min</span>
                </div>
                <span className="text-base font-semibold hover:underline underline-offset-4 cursor-pointer">
                  {blog.title}
                </span>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      className="h-[30px] w-[30px] rounded-full object-cover "
                      width={100}
                      height={100}
                      src={blog.profilePicture}
                      alt=""
                    />
                    <span className="text-grey text-xs">{blog.author}</span>
                  </div>
                  <span>-</span>
                  <span className="text-grey font-light text-xs">
                    {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
