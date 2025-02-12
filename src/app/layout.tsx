// import "./app.css";
import "#/app/styles/layout.scss";
import { ErrorBoundaryProvider } from "#/providers/error-boundary-provider";
import { Sidebar } from "#/features/sidebar";
import { Aside } from "#/features/aside";
import ErrorFallback from "./error-fallback";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <div className={"layout"}>
          <aside>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sed, voluptatum fugiat eveniet eos beatae libero vel doloribus eaque alias. Error suscipit distinctio soluta possimus? Vel officiis consectetur ex itaque.
          </aside>
          <main>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis veritatis architecto nesciunt id at inventore natus doloremque unde quia magnam, incidunt, a quo neque eaque corrupti quidem soluta illo.
            Nostrum dolor error aliquam, saepe ea possimus repudiandae assumenda vel sapiente? Dolor quidem earum dolores, sapiente nesciunt at nemo magni deserunt velit asperiores fugiat fuga incidunt. Quidem aliquam reprehenderit vero.
            Qui corrupti ipsum quia ratione asperiores autem, commodi natus cum. Commodi iste in qui eligendi, laborum pariatur quod placeat quisquam consectetur aspernatur totam earum id ex veritatis blanditiis, temporibus modi?
            Voluptatum, quasi? Nobis voluptates sit temporibus consequuntur, nihil, fugit error fugiat sint amet aspernatur ipsam distinctio expedita vel tenetur sunt corporis adipisci explicabo tempore eligendi quaerat, incidunt eaque quam unde?
            Odio ipsa iste quisquam nam adipisci aut odit accusantium eum error ea voluptatum perferendis neque deleniti, optio, dolorum quidem sunt obcaecati sint rem doloribus debitis, mollitia porro minus! Quas, dolores.
            Illum, cum? Minus laudantium sed nulla nam esse, animi, voluptatem pariatur est eligendi non ducimus deleniti vero dolore nihil fugit aut officiis, doloribus quae qui odio. Similique quia omnis tempore!
            Accusantium sequi aspernatur quae veritatis quas voluptas repellat suscipit voluptatibus, ratione magni voluptate commodi molestias eos labore nostrum fugit repudiandae? Ratione consequatur ea hic in laborum dolorem nihil eius inventore.
            Ipsam nemo minima cum ab voluptate voluptatibus quaerat praesentium error placeat aliquam repellendus accusamus nam obcaecati fugit vero laboriosam sed, doloribus itaque totam quae blanditiis officiis sequi. Voluptatum, quia earum!
            Neque excepturi harum tempora dolore nihil perferendis! Illum autem aliquid sint maxime adipisci quam ea voluptate, alias sunt? Placeat reprehenderit doloribus, minima accusantium libero cum odio officia inventore voluptatibus eveniet!
            Nesciunt veritatis quo eius, ad ex quaerat suscipit magni odio? Atque corporis fuga repellat rem molestias nemo quas dolore, assumenda necessitatibus quidem possimus corrupti magni laudantium et suscipit maxime. Corrupti.
            Reiciendis soluta a est numquam voluptas quam, nemo suscipit? Voluptatum eveniet fugit nihil doloremque velit excepturi inventore aliquid maiores eaque, eos, nam qui, repellendus architecto aspernatur id dicta. Temporibus, placeat.
            Corporis magnam voluptatem quibusdam natus voluptate dolores laudantium fugit asperiores impedit neque, eius quis at deleniti earum totam dicta deserunt, autem porro consequatur. Praesentium distinctio expedita commodi architecto molestias illum.
            Expedita sapiente culpa aut sint fugit odio in! Maiores, ab accusantium iusto odio quae assumenda in reprehenderit officia deserunt odit placeat esse dolorem, consectetur molestiae! Cum deleniti unde nihil eius.
            Hic, facere ipsa unde esse sit iusto voluptatibus voluptas! Ullam assumenda deleniti facilis. Magni vel tenetur corporis neque consectetur fugit explicabo sequi provident natus at vitae, culpa sunt dolor tempora.
            Quod officiis eum eveniet repellat numquam illo maiores placeat dignissimos et, odit ab amet voluptate possimus atque sit aliquid consectetur illum? Error, enim. Maiores, quae doloribus delectus rerum praesentium temporibus.
            Corrupti quo distinctio eum nemo reiciendis sint deserunt ipsum consectetur eligendi blanditiis nihil pariatur, unde quaerat doloribus doloremque ut voluptate ipsam repellat, veniam iste ad rerum at dignissimos temporibus? Tenetur!
            Ipsum perspiciatis at voluptatem repellendus. Dolor labore praesentium consectetur nostrum saepe autem eos quis cumque deleniti, placeat nam ipsa doloribus excepturi beatae enim esse laborum quas. Debitis fugit quasi tenetur!
            Facilis error dolorem aperiam in numquam minus aspernatur tenetur cum, quo laudantium ad voluptate suscipit voluptas rem reprehenderit fuga. Pariatur, commodi. Eos distinctio est veritatis aut repudiandae asperiores. Quibusdam, dolorem?
            Reiciendis eligendi beatae animi, in sint, voluptate odio odit veniam sunt itaque nemo maxime ex temporibus sapiente eum maiores quaerat asperiores, ullam nam. Deleniti neque tempore beatae, maxime architecto ipsa.
            Commodi placeat explicabo soluta quis, voluptas molestias saepe, cumque quidem totam in facere, quos atque nulla inventore voluptate distinctio sunt itaque harum sit maxime excepturi rerum culpa illo? Qui, ratione!
            Unde tenetur voluptates, architecto accusamus earum culpa itaque quis cupiditate commodi! Nostrum voluptates, unde necessitatibus sequi magnam sapiente explicabo reprehenderit culpa voluptatibus suscipit consequuntur beatae ipsa officiis ipsum delectus eaque!
            Inventore, amet nulla ullam consequuntur adipisci consequatur libero mollitia officia assumenda aperiam, tempora corporis? Impedit nulla quis laborum dolorem facilis perspiciatis accusantium totam sint, quaerat ratione nostrum dolorum aliquid commodi!
            Nobis, suscipit nisi odio consequuntur esse corporis optio dolorum culpa aliquam! Non tempore quo incidunt reprehenderit sed, cumque molestiae reiciendis laudantium facere quidem inventore recusandae neque distinctio vero illo. Vitae.
            Repellat, dicta tempora minus dolores sint facilis aspernatur beatae aliquid non, asperiores cumque alias eum atque inventore ratione doloremque voluptate veniam? Minima consequuntur, doloribus molestias expedita nesciunt laborum odit obcaecati!
            Libero illum ex minus porro, blanditiis corrupti numquam nobis dolorum quidem voluptatum inventore tempora, doloremque perferendis hic veritatis! Nostrum repellendus hic nihil deserunt enim pariatur accusantium rem iste reiciendis officia!
            Commodi iure, fugit sint laboriosam non magnam quas debitis facilis? Doloremque voluptas itaque sunt voluptatibus! Sint, maiores, magni exercitationem possimus eum, tenetur voluptates amet doloremque repellendus dicta hic nisi quisquam.
            Porro quo esse est. Excepturi necessitatibus eaque tenetur ut saepe quas modi laboriosam sint vitae non corporis, cum maiores facilis quae porro a neque fugiat, molestiae voluptates nam, voluptas autem!
            Omnis veniam rem dignissimos necessitatibus doloremque, optio cum perspiciatis deserunt quas aperiam ducimus eligendi sint velit sed? Commodi dicta itaque blanditiis facilis obcaecati iste, cumque delectus officiis consectetur, reprehenderit illum.
            Placeat accusamus beatae obcaecati perspiciatis dolorum deserunt facere sunt consequatur fugit vero cupiditate aut non blanditiis repudiandae quidem, nesciunt rem quibusdam possimus ab illum dolorem et alias. Quos, voluptatem illo?
            Nemo iusto nihil tenetur exercitationem facere recusandae eligendi qui deserunt illo. Voluptate porro illum vitae explicabo, blanditiis eos corporis quo dignissimos labore ducimus ex harum maxime assumenda numquam deleniti dolorum.
            Dolores nemo fuga, similique dignissimos atque et sunt quibusdam dolorum quas, ad a iusto magni hic, sapiente vero praesentium sed quidem harum! Explicabo asperiores voluptates blanditiis est vel itaque voluptate!
            Similique, quo. Doloremque quasi vel explicabo autem officiis nemo nam? Sit exercitationem ea at incidunt, impedit nihil. Tempore soluta dolore animi aliquid molestiae ullam eligendi repellendus iure. Iusto, cupiditate recusandae!
            Temporibus culpa velit porro reprehenderit, unde fuga eum quis? Repellat laborum fuga ipsam eligendi placeat dolore officia, neque iusto vitae. Hic dolorum quos architecto cumque impedit vel! Sit, quasi tempora.
            Non sequi nulla itaque, hic reiciendis deleniti dolor vel error, earum architecto amet dolorum perferendis mollitia unde repudiandae nihil est veritatis maxime iusto officiis nemo neque explicabo ea qui. Nostrum?
            Nobis quis perferendis est sit. Esse, iure! Voluptatibus repellat illo odio quis quam officia explicabo beatae labore hic qui libero modi dicta expedita natus, impedit debitis ducimus quibusdam optio eum!
            Eum cum vel consequatur rerum. Quidem aspernatur quaerat voluptates ipsa quo quisquam beatae iste sequi quia asperiores eligendi accusamus omnis, eius neque, quam cum? Explicabo soluta maiores minima nesciunt laudantium.
            Molestias maxime, provident unde, animi modi expedita labore maiores voluptate at quod ipsam sint perferendis aspernatur. Quo magni, corrupti omnis, expedita exercitationem dignissimos ea iste ad id eius ipsam consequatur.
            Expedita quas temporibus laudantium, dicta porro minus aut a nesciunt quis consectetur beatae illo soluta recusandae assumenda accusantium commodi necessitatibus incidunt at tempora inventore blanditiis, alias ea exercitationem! Saepe, vel.
            Distinctio, iusto quibusdam aperiam magni natus reiciendis est explicabo tempora error placeat consequuntur consequatur sapiente fuga ad exercitationem laudantium facere nisi eligendi dolores ipsam nemo? Sunt vel explicabo atque quae.
            Maiores reprehenderit delectus sequi fuga modi impedit provident nihil magni alias. Libero ratione, suscipit amet sint ullam impedit, sit reprehenderit inventore, quae neque delectus totam ducimus dignissimos provident ab commodi.
            Minima iste repellendus modi, pariatur qui, iure commodi omnis itaque doloremque id tenetur nulla error alias nemo quidem expedita quis corrupti suscipit laudantium exercitationem asperiores nam. Reprehenderit veniam ullam rem?
            Doloremque praesentium mollitia molestias facere saepe, beatae excepturi in! Fuga obcaecati vero consequuntur blanditiis ut repellendus fugiat tempore tenetur ipsa nobis dolores saepe, ullam tempora ad quaerat, enim autem eius?
            Aperiam debitis minima odit? Cumque facilis quos deserunt autem nisi eum qui blanditiis voluptatum at a impedit quod quo modi nobis saepe assumenda sequi neque possimus repudiandae, maxime harum accusantium.
            Reiciendis molestias, at tempora exercitationem debitis enim, dicta explicabo quidem aperiam provident amet corrupti officiis, libero quis commodi beatae voluptatem. Impedit accusantium, consectetur repellendus ipsa consequuntur minus dolorem delectus quo.
            Facere illum, consectetur veritatis aliquam veniam sint, quod, quasi itaque labore tempore quae perspiciatis ipsa incidunt. Sunt vitae minus, distinctio delectus rem odio laborum laudantium natus maiores id modi dicta?
            Ex ipsam obcaecati autem exercitationem libero ut voluptates, inventore, natus voluptatum facilis dolores voluptatibus suscipit harum doloribus numquam beatae? Iste, suscipit sapiente nam hic et corrupti numquam tenetur laborum quibusdam?
            Libero laboriosam architecto non, quaerat nihil nisi voluptatibus, dolor illum veritatis ullam voluptate quos aliquid! Quam illo fuga veritatis eius nisi quibusdam totam, eveniet dolorem, neque aliquam at laborum dicta.
            Consequatur consequuntur distinctio tempore exercitationem, odio earum possimus facere in quidem repellat similique saepe harum nihil, dolorum molestias veritatis optio blanditiis est itaque voluptatem hic. Tenetur odio rerum beatae magni?
            Aut sunt repudiandae iure magni quibusdam ipsa hic labore vitae, quos omnis nihil ut aliquam voluptatum repellendus eaque enim consequuntur eius, dolore exercitationem dolorum nesciunt, tempore doloremque cupiditate deleniti. Illo.
            Modi, omnis dolorum. Delectus, facere consequatur quod magnam minima saepe minus voluptatem modi? Assumenda neque hic porro dolore, consectetur nulla? Nobis ipsa nihil neque temporibus sunt dicta soluta quibusdam vero!
            Minus illum laborum id! Repellendus, veniam eius, unde aut laboriosam aperiam vero ea amet, ullam id architecto eligendi aspernatur molestiae dolores provident enim reprehenderit tempore consectetur quas neque. Natus, aliquam.
            Itaque rerum maiores nesciunt aut nam, laboriosam sit et. Minus quam, quos temporibus, eos tempore quisquam aperiam laudantium saepe velit expedita nisi minima quasi praesentium excepturi, laboriosam eaque iusto rerum.
            Sit ex asperiores, numquam reprehenderit sequi inventore animi aperiam, dolor odio ab repudiandae debitis porro. Et cupiditate dolorem autem qui officia unde error possimus quia amet, quisquam, odio laudantium fugit?
            Et commodi doloremque quam aspernatur aut blanditiis corporis adipisci ullam quod? Quidem iusto beatae deleniti atque dolores architecto, blanditiis nostrum esse vero saepe dolore magni voluptates fuga, officiis, veniam fugit.
            Magnam voluptates excepturi exercitationem asperiores numquam sit animi provident consequatur aspernatur repellat aut repellendus consequuntur voluptate qui explicabo voluptatem facilis similique, ratione doloribus eligendi voluptatibus debitis expedita quisquam laudantium. Voluptate.
            Beatae et reprehenderit qui repellendus, repudiandae eveniet officia excepturi! Eius explicabo dolores quibusdam id mollitia alias quasi facere, eum reprehenderit sapiente? Porro facere repellat enim veniam architecto commodi ad quis?
            Ut rerum ducimus excepturi cum dolor, pariatur enim quas quasi ipsum quo voluptatem veniam dolorem qui, delectus temporibus aut consectetur odio doloremque ipsa, recusandae nam eligendi suscipit. Delectus, rerum veniam!
            Rem odit sunt dolore expedita, obcaecati dolor, quidem provident optio nihil incidunt placeat quos necessitatibus ex. Voluptate expedita repellendus beatae laboriosam. Earum velit veritatis nam ad temporibus veniam qui eius?
            Assumenda quia qui esse asperiores ratione, pariatur illum? Ex magnam recusandae totam iste ipsam molestiae laudantium earum animi, officia in saepe! Voluptates odio nulla distinctio molestias nesciunt magnam aliquid maxime!
            Iusto quod provident quia animi, laudantium eligendi dicta dolore ipsam mollitia magnam facere alias error fuga nulla placeat culpa, quaerat quisquam totam. Libero unde incidunt nemo quasi harum, nulla repudiandae.
            Totam ducimus, id ipsam sed provident in, quia ratione impedit facilis blanditiis, magnam perferendis nam veniam! Quasi doloribus deserunt velit voluptate rerum minus voluptatibus dolorum magnam, nisi mollitia, quod voluptas!
            Atque debitis esse fugiat eum nisi, autem officia cupiditate cumque tempore? Impedit accusamus obcaecati adipisci laboriosam natus perspiciatis perferendis, nisi iure et beatae in voluptas eaque quaerat. Nisi, qui commodi.
            Quae rem debitis, temporibus modi culpa fugit iure quam pariatur. Magni accusamus debitis odit culpa et libero modi iure, blanditiis sapiente cum sint nisi enim inventore quasi quas architecto soluta.
            Optio, quos deleniti. Mollitia ducimus earum cumque, dolorem nemo ratione sed perferendis possimus error, laboriosam voluptates quaerat aliquam tempore labore modi odio sapiente molestias quos eligendi ex totam illum quasi!
            Soluta aspernatur, odit repudiandae aut officia debitis eaque consequatur consectetur officiis laudantium, velit enim nihil consequuntur amet esse totam fugiat quia accusamus, excepturi a atque impedit modi. Repudiandae, molestiae animi.
            Reiciendis debitis id, odio error molestiae minus, earum, adipisci doloribus quod dolor dolorum consequuntur magnam nemo quibusdam corporis excepturi sunt sit. Optio voluptates nesciunt rem itaque, laborum hic aliquam illo.
            Ea magnam id fugit adipisci velit eveniet nobis est quasi voluptas! Itaque, perspiciatis! Vel totam hic sunt. Iste, consectetur cum adipisci numquam repudiandae exercitationem sequi, repellendus cupiditate, eveniet accusamus magnam.
            Perferendis, in similique. Non, delectus dolores. Nulla ipsa et velit quam. Aliquid deserunt velit sunt explicabo quasi veniam, quidem dolor consectetur, accusantium maiores hic unde fugiat vero doloribus sint iste.
            Laborum, cum. Repellat cumque ad consectetur nemo id quod minima laborum, deleniti delectus voluptatum accusantium praesentium sequi laudantium deserunt earum, ex vel dolor, magnam libero error fuga. Consequatur, repudiandae perspiciatis?
            Suscipit nisi voluptatibus modi ipsa provident tempore corrupti at eos, voluptas illo magni nam omnis rem nobis non recusandae, quod repudiandae maiores. Quis necessitatibus sed unde omnis fugiat perferendis inventore!
            Atque voluptatibus excepturi, molestias beatae quod nihil reprehenderit sit sint quam doloribus nostrum ipsa, velit voluptatum, error amet. Incidunt aut veniam consequuntur tempore odio provident ea! Voluptatem rerum nulla tenetur?
            Enim dicta officiis facilis mollitia dolorum vero voluptatem nesciunt reprehenderit, dolores reiciendis nam excepturi ipsum nostrum vel impedit earum recusandae aut deleniti placeat at fuga doloremque. Facere laborum cumque voluptates.
            Fugit repudiandae iure et illum error. Maxime eos doloribus ipsum necessitatibus sit fugit est earum incidunt aliquam consequuntur? Natus minus ducimus illo dolor! Enim veritatis assumenda voluptatum dolore consequuntur reiciendis!
            Voluptates iure impedit quas fugiat consequatur ab distinctio, earum culpa quos repudiandae laboriosam sequi soluta adipisci molestias eligendi illo optio harum quia accusamus repellat dolorem id est voluptas nostrum! Voluptatibus?
            Asperiores, dicta minima atque ut quaerat, magni dolorum ab tenetur nesciunt beatae nemo deserunt reiciendis eveniet alias, tempore consectetur voluptatem temporibus! Corporis error laborum doloremque dolorum eum. Assumenda, quae quis.
            Minus esse mollitia maxime tenetur totam animi et nobis magnam, eligendi similique laborum quaerat, commodi officiis quibusdam voluptatem assumenda sit distinctio dolores voluptatum harum nostrum. Facilis explicabo praesentium dolorem iure?
            Explicabo atque et, assumenda saepe ea delectus, aperiam deleniti, tempore temporibus ducimus veritatis autem quibusdam animi laboriosam consequatur repellat. Laudantium distinctio dolorum doloribus cum nesciunt harum dignissimos vero in aspernatur.
            Hic deserunt nesciunt expedita! Provident ipsa, porro est cupiditate sed dolores laborum. Eos, aliquid cum! Necessitatibus quam, nihil ex perspiciatis veritatis quidem. Deleniti vero quod, laborum qui fugiat omnis maiores?
            Aliquam soluta magni necessitatibus eveniet voluptates nulla dolor dolore, veritatis quibusdam unde. Quos aperiam suscipit quod impedit nam, nobis obcaecati velit quo libero voluptates natus debitis, fuga perspiciatis veritatis harum!
            Minus reiciendis assumenda expedita incidunt earum numquam, voluptas ipsum iste doloremque unde quibusdam omnis aliquid nobis. Ut aliquid, minus molestiae iste, necessitatibus ullam animi dignissimos perferendis possimus mollitia quod officia.
            Commodi officiis incidunt officia error ut perspiciatis labore voluptatum ullam non maxime quia, dicta esse inventore, harum blanditiis, quisquam temporibus voluptas. Deleniti sapiente a aut provident quis praesentium, eligendi at!
            Saepe maxime sapiente totam. Aspernatur excepturi itaque nobis doloremque magnam odit facere temporibus aut quod sunt vitae incidunt dolor a error exercitationem autem, velit dolorem fugit nam quas? Deserunt, quos.
            Recusandae hic dicta doloribus quas quae, delectus molestiae odit repellendus esse dolorum modi, tenetur reiciendis accusantium porro illum incidunt tempora nihil quasi quam sapiente sunt fuga in officia. Perferendis, consequatur.
            Voluptatum inventore ea aliquam placeat, illum repellat voluptate numquam. Ipsam quibusdam ipsa debitis aperiam architecto impedit praesentium? Obcaecati sint blanditiis inventore minus qui dignissimos odio dolore distinctio libero, voluptatibus maxime!
            Dolorum reprehenderit debitis ipsa voluptatum temporibus maxime provident aperiam suscipit, neque, tempora cum molestias! Animi, placeat. Eligendi nemo inventore est assumenda, tempore qui quidem, doloribus, esse consectetur exercitationem nulla quasi?
            Atque temporibus quidem ratione error dolor recusandae laboriosam quae similique rerum itaque nostrum dignissimos esse quisquam, ea eius labore ab consectetur. Dolores adipisci est animi impedit consequuntur tempora illum deleniti.
            Sapiente, nisi. Sit quisquam repellendus quibusdam. Et repellendus obcaecati temporibus rem maxime officiis, cum asperiores vero ducimus esse ea nostrum itaque odio eos repellat quidem consequatur eveniet iste eaque accusantium!
            Possimus maxime praesentium quos soluta placeat dolor, numquam dolorum repudiandae beatae dolorem iure voluptatibus corrupti natus quam alias, minus magni voluptas quia in eius ab enim? Adipisci quam veniam cupiditate.
            Explicabo excepturi id labore corrupti eligendi possimus doloribus, quibusdam voluptatibus blanditiis similique deleniti velit, nemo mollitia perspiciatis, cumque quis officiis commodi dolore modi delectus a. Expedita qui incidunt eius ea?
            A quas non minima labore dolorem eligendi iste id, fugit, dolores voluptatibus laborum illum maxime nam officiis optio explicabo accusamus ipsam dicta! Totam eveniet autem asperiores cumque facere odit qui.
            Corrupti, facilis veritatis et sed minima nobis facere delectus voluptates quam porro, exercitationem aliquid maiores inventore perspiciatis quae earum tenetur magni iure a ullam, voluptate doloribus fuga! Commodi, omnis pariatur.
            Reprehenderit maiores assumenda ipsam rem reiciendis nisi fuga excepturi quae esse, error ea iste id blanditiis debitis nostrum vero? Vitae rem cum aliquam molestias! Tenetur optio suscipit dolorem architecto assumenda?
            Labore voluptatum, debitis voluptatem qui et adipisci ex quos, corrupti, officiis architecto similique. Excepturi id, accusamus quae nobis minima, saepe culpa voluptate quos fugiat, molestias maxime totam molestiae expedita? Impedit.
            Minus excepturi perferendis a qui omnis odio totam dignissimos, sunt officiis ex non perspiciatis voluptatibus possimus autem repudiandae dolores aspernatur deserunt est voluptate hic dolorum, assumenda facere vel. Vel, harum?
            Tenetur, iure sapiente aperiam dolor, voluptate, similique perspiciatis rem voluptas reiciendis totam quia id cumque quo quibusdam possimus minus aliquid est. Sed fuga nihil fugiat nam quia neque cumque quaerat.
            Mollitia assumenda tempore nesciunt temporibus nihil quis, inventore repellat laudantium sequi ad neque voluptate nam dignissimos recusandae perferendis quam aliquam quasi in. Error aliquid asperiores in minus molestias, voluptatum hic!
            Nobis, minima ipsum blanditiis corporis facere consectetur perspiciatis quidem ipsa, magnam reiciendis aliquam et, fugit ipsam sequi! Facilis dolore blanditiis amet inventore sequi beatae, qui molestias repellat, autem asperiores adipisci.
            Doloribus, ratione. Quae ipsam neque, nam maiores non quam officia ipsa, magni, porro nobis omnis cupiditate! Sequi repudiandae, cum tempore aliquid recusandae, dicta quasi eaque quis modi, commodi vitae alias!
            Sapiente nesciunt quos eum, illo officiis rerum quod? Vel ex harum reprehenderit quidem maxime, repudiandae accusantium distinctio magnam ab eaque aut minima nemo maiores, voluptate omnis, id dolor quia corporis?
            Dolorum qui pariatur earum ipsum id facere quia nostrum ipsa laborum, deleniti, nam eligendi dolores laudantium omnis. Nisi, odio, harum tempora nihil mollitia quas consequatur ipsam quibusdam iusto laboriosam distinctio!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore modi tempora earum laborum repellendus! Repellendus, quo. Ducimus neque sunt placeat id. Repellendus aperiam rem quisquam est sapiente ratione dolores sunt?
          </main>
          <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam totam officia voluptate natus vitae in sit deserunt? Consequatur odio ullam sint, atque ducimus quia quibusdam qui architecto aut reiciendis!
          </aside>
        </div> */}
        <div className="layout">
          <ErrorBoundaryProvider fallback={ErrorFallback}>
            <Sidebar />
          </ErrorBoundaryProvider>
          <main>
            <ErrorBoundaryProvider fallback={ErrorFallback}>
              {children}
            </ErrorBoundaryProvider>
          </main>
          <ErrorBoundaryProvider fallback={ErrorFallback}>
            <Aside />
          </ErrorBoundaryProvider>
        </div>
      </body>
    </html>
  );
}
