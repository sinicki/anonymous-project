import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const FUNDS = [
  [
    "Hotels",
    "Lumi on jääkiteiden ja ilman muodostamaa kuohkeaa ainetta, jota syntyy pilvissä ja sataa maahan talvella riippuen siitä, onko ilman lämpötila tarpeeksi kylmä. Puhdas lumi on valkoista ja läpinäkymätöntä. Lumi muodostaa maan pinnalle valkoisen, eristävän peitteen, joka pysyy lumena niin kauan, kunnes lämpötila nousee nollan yläpuolelle ja lumi sulaa vedeksi. Jos lumi ei kesälläkään ehdi sulaa, se kovettuu vähitellen jäätiköksi.\n" +
      "\n" +
      "Monet eläimet ovat sopeutuneet lumi-ilmastoon, ja niiden talvehtimisen onnistumiseen vaikuttaa lumen määrä. Lisäksi monien eläinten talviturkki on valkoinen, ja lumi suojaa myös useiden kasvien talvehtimista. Ihmisen toimintaan lumella on sekä positiivisia että negatiivisia vaikutuksia. Lumipeite helpottaa esimerkiksi hiihtäen tai potkukelkalla liikkumista, sekä mahdollistaa monet talviurheilulajit ja muut harrastukset, mutta toisaalta sakea lumipyry saattaa aiheuttaa liikennekaaoksen ja liukastumisia.",
  ],
  [
    "Restaurants",
    "Lumikiteiden muoto riippuu lämpötilasta ja kosteudesta sekä niiden syntypaikassa että matkalla maan pinnalle. Jääkiteiden rakenteen takia niistä voi tulla kuusikulmaisia levyjä, neulasia tai haaroittuvia tähtiä.[1] Japanilainen Ukichiro Nakaya kasvatti 1930-luvulla lumihiutaleita kaniininkarvojen päässä laboratoriossa ja tutki systemaattisesti kosteuden ja lämpötilan vaikutusta. Lähellä nollaa syntyi levyjä, 3–12 pakkasasteessa pilareita, sitten taas levyjä ja kylmemmässä kuin −22 asteessa jälleen pilareita. Mitä vähemmän kosteutta oli, sitä yksinkertaisempia kiteistä tuli. Monihaaraiset, tähtimäiset kuviot vaativat suuren kosteuden.[2] Sopivissa oloissa lumikiteet tarttuvat toisiinsa ja muodostavat lumihiutaleita, joissa voi olla satoja toisiinsa takertuneita lumikiteitä.",
  ],
  [
    "Gyms",
    "Lumi on jääkiteiden ja ilman muodostamaa kuohkeaa ainetta, jota syntyy pilvissä ja sataa maahan talvella riippuen siitä, onko ilman lämpötila tarpeeksi kylmä. Puhdas lumi on valkoista ja läpinäkymätöntä. Lumi muodostaa maan pinnalle valkoisen, eristävän peitteen, joka pysyy lumena niin kauan, kunnes lämpötila nousee nollan yläpuolelle ja lumi sulaa vedeksi. Jos lumi ei kesälläkään ehdi sulaa, se kovettuu vähitellen jäätiköksi.\n" +
      "\n" +
      "Monet eläimet ovat sopeutuneet lumi-ilmastoon, ja niiden talvehtimisen onnistumiseen vaikuttaa lumen määrä. Lisäksi monien eläinten talviturkki on valkoinen, ja lumi suojaa myös useiden kasvien talvehtimista. Ihmisen toimintaan lumella on sekä positiivisia että negatiivisia vaikutuksia. Lumipeite helpottaa esimerkiksi hiihtäen tai potkukelkalla liikkumista, sekä mahdollistaa monet talviurheilulajit ja muut harrastukset, mutta toisaalta sakea lumipyry saattaa aiheuttaa liikennekaaoksen ja liukastumisia.",
  ],
  ["Farm", "cows etc"],
];

const useStyles = makeStyles({
  root: {
    //  width:500,
    //  maxWidth: 500,
  },
  media: {
    height: 140,
  },
  description: {
    maxHeight: 400,
    overflowY: "auto",
  },
});

export default function Funds() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {FUNDS.map(([name, description]) => (
        <Grid item xs={6} sm={3} key={name}>
          <Card className={classes.root} key={name}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.description}
                >
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Donate
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
