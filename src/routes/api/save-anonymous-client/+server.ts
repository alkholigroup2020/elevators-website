import type { RequestHandler } from './$types';
import { dbPassword } from '$env/static/private';
import { dbUser } from '$env/static/private';
import { dbServerIP } from '$env/static/private';
import { MongoClient } from 'mongodb';

const uri = `mongodb://${dbUser}:${dbPassword}@${dbServerIP}/`;

const client = new MongoClient(uri);
await client.connect();

export const POST: RequestHandler = async ({ request }) => {
	const { surveyData } = await request.json();

	if (surveyData.contractID) {
		// await client.connect();
		await client
			.db('survey')
			.collection('specificClients')
			.updateOne(
				{ contractID: surveyData.contractID },
				{
					$set: {
						Client_Experience_Level: surveyData.Client_Experience_Level,
						Service_Quality: surveyData.Service_Quality,
						Delivery_Time: surveyData.Delivery_Time,
						Installation_Time: surveyData.Installation_Time,
						Employees_Behavior: surveyData.Employees_Behavior,
						Product_Rating: surveyData.Product_Rating,
						Client_Message: surveyData.Client_Message
					}
				}
			);
		return new Response();
	} else {
		// await client.connect();
		await client.db('survey').collection('clients').insertOne(surveyData);
		return new Response();
	}
};
